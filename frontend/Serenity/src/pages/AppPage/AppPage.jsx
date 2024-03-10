import React, { useState } from 'react';
import './AppPage.css';
import { Text, Card, Inset } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, Flex } from '@radix-ui/themes';

import JournalEntry from '../../components/JournalEntry/JournalEntry.jsx';
import Chart from 'react-google-charts';
import axios from 'axios';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';
import '../../components/JournalView/journalview.css';

function AppPage() {
  const [showChart, setShowChart] = useState(false);
  const [allJournals, setAllJournals] = useState([]);
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const navigateToHomepage = () => {
    navigate('/');
  };

  const navigateToExercise = () => {
    navigate('/exercise');
  };

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  const getAllJournals = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/journals/getAllJournalsPerUser',
        {
          // Add data to send in the POST request body
          params: {
            email: email,
          },
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log(response.data); // Log response data if needed
      setAllJournals(response.data.body);
    } catch (error) {
      console.error('Error posting journal entry:', error);
    }
  };

  const handleSaveJournal = () => {
    getAllJournals();
  };

  const AccordionTrigger = forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={'AccordionTrigger'}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  const AccordionContent = forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className={'AccordionContent'}
        {...props}
        ref={forwardedRef}
      >
        <div className="AccordionContentText">{children}</div>
      </Accordion.Content>
    )
  );

  React.useEffect(() => {
    getAllJournals();
  }, []);

  return (
    <div className="app-container">
      <div className="header-wrapper-app">
        <h1 className="header-app">Serenity</h1>
        <img src="src/assets/logo.png" className="logo-app" />
      </div>

      <div className="app-cards-wrapper">
        <div className="app-card">
          <Card variant="classic">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1465409042654-5314e9d1754b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 160,
                  objectPosition: 'center',
                }}
                onClick={navigateToExercise}
              />
            </Inset>
            <Text as="p" size="3">
              Breathing Exercises
            </Text>
          </Card>
        </div>

        <Dialog.Root>
          <div className="app-card">
            <Card variant="classic">
              <Inset clip="padding-box" side="top" pb="current">
                <Dialog.Trigger>
                  <img
                    src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Bold typography"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 160,
                    }}
                    onClick={toggleChart}
                  />
                </Dialog.Trigger>
              </Inset>
              <Text as="p" size="3">
                View Your Statistics
              </Text>
            </Card>
          </div>
          <Dialog.Content>
            <Dialog.Title>Statistics</Dialog.Title>
            <div className="graph-wrapper">
              {
                <div style={{ display: 'flex', maxWidth: 900 }}>
                  <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Date', 'Average Level'],
                      ['Day 1', 6],
                      ['Day 2', 8],
                      ['Day 3', 4.5],
                      ['Day 4', 7],
                    ]}
                    options={{
                      title: 'Stress Level',
                      curveType: 'function',
                      legend: { position: 'bottom' },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                  />
                </div>
              }

              {
                <div style={{ display: 'flex', maxWidth: 900 }}>
                  <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Date', 'Average Time'],
                      ['Day 1', 70],
                      ['Day 2', 40],
                      ['Day 3', 200],
                      ['Day 4', 80],
                    ]}
                    options={{
                      title: 'Time Spent',
                      curveType: 'function',
                      legend: { position: 'bottom' },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                  />
                </div>
              }
            </div>
          </Dialog.Content>
        </Dialog.Root>

        <Dialog.Root>
          <div className="app-card">
            <Card variant="classic">
              <Inset clip="padding-box" side="top" pb="current">
                <Dialog.Trigger>
                  <img
                    src="https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Bold typography"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 160,
                    }}
                  />
                </Dialog.Trigger>
              </Inset>
              <Text as="p" size="3">
                Create A Journal
              </Text>
            </Card>
          </div>
          <Dialog.Content>
            <Dialog.Title>New Journal Entry</Dialog.Title>

            <JournalEntry list={allJournals} onSave={handleSaveJournal} />

            <Flex gap="3" mt="4" justify="end"></Flex>
          </Dialog.Content>
        </Dialog.Root>

        <Dialog.Root>
          <div className="app-card">
            <Card variant="classic">
              <Inset clip="padding-box" side="top" pb="current">
                <Dialog.Trigger>
                  <img
                    src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Bold typography"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 160,
                    }}
                  />
                </Dialog.Trigger>
              </Inset>
              <Text as="p" size="3">
                View Previous Journals
              </Text>
            </Card>
          </div>

          <Dialog.Content>
            <Dialog.Title>Your Journals</Dialog.Title>

            <Accordion.Root
              className="AccordionRoot"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              {allJournals.map((item, index) => (
                <Accordion.Item
                  value={index}
                  className="AccordionItem"
                  key={index}
                >
                  {item.text && (
                    <AccordionTrigger>
                      <div className="accordion-item-header">
                        <span className="accordion-item-title">
                          {new Date(item.timestamp).getUTCDate()} {'/'}{' '}
                          {new Date(item.timestamp).getMonth() + 1} {'/'}{' '}
                          {new Date(item.timestamp).getFullYear()}
                        </span>
                      </div>
                    </AccordionTrigger>
                  )}
                  <AccordionContent>{item.text}</AccordionContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="red">
                  Quit
                </Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </div>
      <div className="logout">
        <Button color="teal" size={'3'} onClick={navigateToHomepage}>
          Log out
        </Button>
      </div>
    </div>
  );
}

export default AppPage;

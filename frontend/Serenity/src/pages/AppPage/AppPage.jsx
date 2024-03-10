import React, { useState } from "react";
import "./AppPage.css";
import { Text, Card, Inset } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, Table, Flex } from "@radix-ui/themes";
import JournalView from "../../components/JournalView/JournalView.jsx";
import JournalEntry from "../../components/JournalEntry/JournalEntry.jsx";
import { Chart } from 'react-google-charts';

function AppPage() {
  const navigate = useNavigate();

  const itemList = [
    {
      title: "Journal 1",
      date: "01/01/2022", 
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Journal 2',
      date: '02/01/2022',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const navigateToHomepage = () => {
    navigate('/');
  };

  const navigateToExercise = () => {
    navigate("/exercise");
  };

  const [showChart, setShowChart] = useState(false);

    const toggleChart = () => {
        setShowChart(!showChart);
    };

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
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
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
            <Dialog.Title>Create a chart here</Dialog.Title>
              <div className="graph-wrapper">
                {showChart && (
                  <div style={{ display: 'flex', maxWidth: 900 }}>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Year', 'Sales', 'Expenses'],
                            ['2013', 1000, 400],
                            ['2014', 1170, 460],
                            ['2015', 660, 1120],
                            ['2016', 1030, 540],
                        ]}
                        options={{
                            title: 'Company Performance',
                            curveType: 'function',
                            legend: { position: 'bottom' },
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            )}

                {showChart && (
                  <div style={{ display: 'flex', maxWidth: 900 }}>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Year', 'Sales', 'Expenses'],
                            ['2013', 1000, 400],
                            ['2014', 1170, 460],
                            ['2015', 660, 1120],
                            ['2016', 1030, 540],
                        ]}
                        options={{
                            title: 'Company Performance',
                            curveType: 'function',
                            legend: { position: 'bottom' },
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            )}
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

            <JournalEntry />

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="red">
                  Cancel
                </Button>
              </Dialog.Close>

              <Dialog.Close>
                <Button color="teal">Save</Button>
              </Dialog.Close>
            </Flex>
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
            <JournalView list={itemList} />

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

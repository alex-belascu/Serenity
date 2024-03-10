/* eslint-disable react/display-name */
import './journalview.css';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';

function JournalView(props) {
  console.log(props, 'all journals');

  const calculateDate = (date) => {
    var theDate = new Date(date * 1000);
    let dateString = theDate.toGMTString();
    return dateString;
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

  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {props.list.map((item, index) => (
        <Accordion.Item value={index} className="AccordionItem" key={index}>
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
  );
}

export default JournalView;

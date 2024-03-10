import "./journalview.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

function JournalView({ list }) {
  const AccordionTrigger = forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={"AccordionTrigger"}
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
        className={"AccordionContent"}
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
      {list.map((item, index) => (
        <Accordion.Item value={"item" + index} className="AccordionItem">
          <AccordionTrigger>
            <div className="accordion-item-header">
              <span className="accordion-item-title">{item.title}</span>
              <span className="accordion-item-date">{item.date}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default JournalView;

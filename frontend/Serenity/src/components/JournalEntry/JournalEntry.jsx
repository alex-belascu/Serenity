import { useEffect, useState} from "react";
import "./journalentry.css";
import * as Form from "@radix-ui/react-form";

export default function JournalEntry() {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

  useEffect(() => {
    console.log("title: " + title);
    console.log("entry: " + entry);
  }, [title, entry]);

  return (
    <Form.Root className="FormRoot">
      <Form.Field className="FormField" name="journal-entry-field">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "left",
          }}
        >
          <input
            type="text"
            id="journal-title-input"
            name="journal-title-input"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control asChild>
            <textarea
              type="text"
              id="journal-entry-input"
              name="journal-entry-input"
              placeholder="Write your journal entry here..."
              onChange={(e) => setEntry(e.target.value)}
            />
          </Form.Control>
        </div>
      </Form.Field>
    </Form.Root>
  );
}

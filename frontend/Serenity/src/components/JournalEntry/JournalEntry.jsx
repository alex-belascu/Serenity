import { useEffect, useState } from 'react';
import './journalentry.css';
import * as Form from '@radix-ui/react-form';
import axios from 'axios';
import { Button } from '@radix-ui/themes';

export default function JournalEntry({ list, onSave }) {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const email = localStorage.getItem('email');

  const postJournalEntry = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/journals/saveJournalPerUser',
        {
          // Add data to send in the POST request body
          email: email,
          text: entry,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log(response.data); // Log response data if needed
      onSave();
    } catch (error) {
      console.error('Error posting journal entry:', error);
    }
  };

  useEffect(() => {
    console.log('title: ' + title);
    console.log('entry: ' + entry);
  }, [title, entry]);

  return (
    <>
      <Form.Root className="FormRoot">
        <Form.Field className="FormField" name="journal-entry-field">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'left',
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

      <div style={{ marginTop: '10px' }}>
        <Button color="teal" onClick={postJournalEntry}>
          Save
        </Button>
      </div>
    </>
  );
}

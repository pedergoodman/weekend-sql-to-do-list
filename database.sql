CREATE TABLE "task-list" (
  "id" SERIAL PRIMARY KEY,
  "text" VARCHAR(255) NOT NULL,
  "completed-status" BOOLEAN DEFAULT FALSE,
  "completed-date" DATE,
  "created-date" TIMESTAMPTZ DEFAULT NOW(),
  "due-date" DATE
);


/* sample data! */
INSERT INTO "task-list"
 ("text", "completed-status", "completed-date", "due-date")
 VALUES
  ('Finish project proposal', true, '2023-06-20', '2023-06-15'),
  ('Buy groceries', false, NULL, '2023-06-13'),
  ('Call John', true, '2023-06-15', '2023-06-14'),
  ('Pay utility bills', false, NULL, '2023-06-25'),
  ('Go for a run', true, '2023-06-22',  '2023-06-25'),
  ('Finish book chapter', false, NULL,  '2023-06-30'),
  ('Attend team meeting', false, NULL, '2023-06-21'),
  ('Clean the house', false, NULL,  '2023-06-25'),
  ('Prepare presentation', true, '2023-06-18', '2023-06-20'),
  ('Go to the gym', false, NULL, '2023-06-26'),
  ('Send client proposal', true, '2023-06-17',  '2023-06-20'),
  ('Attend concert', false, NULL, '2023-07-02');
  
  

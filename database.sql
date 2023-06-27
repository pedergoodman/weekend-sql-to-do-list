CREATE TABLE "task-list" (
  "id" SERIAL PRIMARY KEY,
  "text" VARCHAR(255) NOT NULL,
  "completed_status" BOOLEAN DEFAULT FALSE,
  "completed_date" DATE,
  "created_date" TIMESTAMPTZ DEFAULT NOW(),
  "due_date" DATE DEFAULT NULL
);


/* sample data! */
INSERT INTO "task-list"
 ("text", "completed_status", "completed_date", "due_date")
 VALUES
  ('Finish project proposal', true, '2023-06-20', '2023-06-15'),
  ('Buy groceries', false, NULL, '2023-06-13'),
  ('Call John', true, '2023-06-15', '2023-06-14'),
  ('Pay utility bills', false, NULL, '2023-06-25'),
  ('Go for a run', true, '2023-06-22', '2023-06-25'),
  ('Finish book chapter', false, NULL, '2023-06-30'),
  ('Attend team meeting', false, NULL, '2023-06-21'),
  ('Clean the house', false, NULL, '2023-06-25'),
  ('Prepare presentation', true, '2023-06-18', '2023-06-20'),
  ('Go to the gym', false, NULL, '2023-06-26'),
  ('Send client proposal', true, '2023-06-17', '2023-06-20'),
  ('Attend concert', false, NULL, '2023-07-02'),
  ('Buy birthday gift', false, NULL, '2023-07-05'),
  ('Read a book', false, NULL, '2023-07-10'),
  ('Write an article', true, '2023-07-01', '2023-07-08'),
  ('Attend yoga class', false, NULL, '2023-07-03'),
  ('Finish coding project', false, NULL, '2023-07-15'),
  ('Call parents', false, NULL, '2023-07-07'),
  ('Plan weekend getaway', true, '2023-06-28', '2023-07-02'),
  ('Update resume', false, NULL, '2023-07-12'),
  ('Renew library books', false, NULL, '2023-07-09'),
  ('Check email', false, NULL, '2023-07-11'),
  ('Attend project meeting', false, NULL, '2023-07-16'),
  ('Shop for groceries', false, NULL, '2023-07-14');
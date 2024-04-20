create DATABASE book_table;
use book_table;
DROP table book_tables;

create table book_tables(
bookID INT PRIMARY KEY,
title varchar(100),
author varchar(100),
ISBN INT,
publisher varchar(100),
publicationYear INT,
genre varchar(100),
price int
);


insert into book_tables
value(1,"Malgudi_days","R.k Narayan",11,"abc","2001-01-01","short story",50);

insert into book_tables
value(2,"untouchable","Mulk raj anand",12,"bac","2002-02-02","Mystery",60);

insert into book_tables
value(3,"Tiger","Mulk raj anand",13,"cab","2003-02-02","short story",70);



INSERT INTO book_tables (BookID, Title, Author, ISBN, Publisher, PublicationYear, Genre, Price) VALUES
(1, 'To Kill a Mockingbird', 'Harper Lee', 97800, 'Harper Perennial Modern Classics', 1960, 'Classic', 14.99),
(2, '1984', 'George Orwell', 978045, 'Plume', 1949, 'Dystopian', 9.99),
(3, 'The Great Gatsby', 'F. Scott Fitzgerald', 978074, 'Scribner', 1925, 'Novel', 15.00),
(4, 'The Catcher in the Rye', 'J.D. Salinger', 97803, 'Little, Brown and Company', 1951, 'Literature', 8.99),
(5, 'Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 97807, 'Harper', 2011, 'Non-fiction', 22.00),
(6, 'Life of Pi', 'Yann Martel', 97328, 'Harcourt', 2001, 'Adventure fiction', 12.99),
(7, 'The Alchemist', 'Paulo Coelho', 972415, 'HarperOne', 1988, 'Philosophical novel', 16.99),
(8, 'Brave New World', 'Aldous Huxley', 97524, 'Harper Perennial', 1932, 'Dystopian', 14.99),
(9, 'The Road', 'Cormac McCarthy', 97899, 'Vintage', 2006, 'Post-apocalyptic', 14.95),
(10, 'Gone Girl', 'Gillian Flynn', 90371, 'Crown Publishing Group', 2012, 'Thriller', 9.99);

SELECT bookID,title
FROM book_tables
where author ="Gillian Flynn";

SELECT bookID,title,price
FROM book_tables
where price > 15 AND price <20;

SELECT bookID,title
FROM book_tables
where author = "Harper Lee";

SELECT genre
FROM book_tables
group by genre;

SELECT genre,MAX(price) 
FROM book_tables
GROUP BY genre;


SELECT author,COUNT(bookID) AS COUNT
FROM book_tables
GROUP BY author;





DROP table Inventory;

create table Inventory(
inventoryId INT PRIMARY KEY,
bookId INT ,
quantity INT,
location varchar(100),
FOREIGN KEY (bookId) REFERENCES book_tables (bookId)
);

INSERT INTO Inventory (InventoryID, BookID, Quantity, Location) VALUES
(1, 1, 35, 'Shelf A1'),
(2, 2, 20, 'Shelf A2'),
(3, 3, 15, 'Shelf B1'),
(4, 4, 25, 'Shelf B2'),
(5, 5, 30, 'Shelf C1'),
(6, 6, 40, 'Shelf C2'),
(7, 7, 50, 'Shelf D1'),
(8, 8, 45, 'Shelf D2'),
(9, 9, 10, 'Shelf E1'),
(10, 10, 5, 'Shelf E2');


SELECT B.bookID,I.Quantity
FROM book_tables AS B
JOIN Inventory AS I
ON B.bookId = I.bookId
where I.quantity <= 5; 

UPDATE inventory
SET quantity=quantity + 100
where inventoryID=5;

SELECT *
FROM Inventory;

SELECT B.bookID,I.location
FROM book_tables AS B
JOIN Inventory AS I
ON B.bookId = I.bookId
where B.bookId=3;

SELECT B.bookID
FROM book_tables AS B
JOIN Inventory AS I
ON B.bookId = I.bookId
where I.quantity=0;

SELECT B.genre,I.quantity
FROM book_tables AS B
JOIN inventory AS I
ON B.bookID = I.bookID
ORDER BY B.genre;

SELECT B.bookID,I.location
FROM book_tables AS B
JOIN Inventory AS I
ON B.bookId = I.bookId
where I.quantity<=10;














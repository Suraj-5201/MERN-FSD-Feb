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


SELECT bookID, quantity
FROM inventory
where quantity <= 5; 

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

create table customers(
customerId INT PRIMARY KEY,
FirstName varchar(100),
LastName varchar(100),
email varchar(100),
phone INT,
address varchar(100)
);

INSERT INTO Customers (CustomerID, FirstName, LastName, Email, Phone, Address) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 123456, '123 Main St'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 98765432, '456 Elm St'),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', 5534567, '789 Oak Ave'),
(4, 'Bob', 'Brown', 'bob.brown@example.com', 2223334, '321 Pine Rd'),
(5, 'Emily', 'Davis', 'emily.davis@example.com', 77788899, '654 Maple Ln');

create table Sales(
salesId INT PRIMARY KEY NOT NULL,
bookID INT,
customerId INT,
quantity INT,
salesDate date,
totalPrice INT,
FOREIGN KEY (bookId) references book_tables(bookId),
FOREIGN KEY (customerId) references customers(customerId)
);

INSERT INTO Sales (SalesID, BookID, CustomerID, Quantity, SalesDate, TotalPrice)
VALUES (1, 1, 1, 1, CURDATE(), 19.99);

INSERT INTO Sales (SalesID, BookID, CustomerID, Quantity, SalesDate, TotalPrice)
VALUES(2,2,2,1,"2023-01-01",40);

INSERT INTO Sales (SalesID, BookID, CustomerID, Quantity, SalesDate, TotalPrice)
VALUES(3,3,3,2,"2023-03-03",30);




SELECT *
FROM customers;

UPDATE customers
SET phone = 123478,email = "suraj@123"
where customerId =5;

SELECT customerId
FROM customers
where address like "1%";

select *
FROM customers
where email = "john.doe@example.com";

SELECT C.customerId
FROM customers AS C
JOIN sales AS S
ON C.customerId = S.customerId
Where S.salesDate > "2024-01-01";

SELECT C.customerId,S.totalPrice
FROM customers AS C
JOIN sales AS S
ON C.customerId = S.customerId
Where S.totalPrice>30;

SELECT customerId,quantity
FROM sales 
order by quantity desc
limit 1;


SELECT salesId
FROM sales
where salesDate = "2023-03-03";

SELECT COUNT(salesId)
FROM sales
where bookId = 1;

SELECT *
FROM sales
where customerId = 1;

SELECT AVG(totalprice)
FROM sales;

SELECT bookId
FROM sales
order by quantity DESC
limit 5;

SELECT DATE("2023-01-01") AS Day,SUM(totalPrice) as Revenue_amount
FROM sales
where salesDate = '2023-01-01';

SELECT Year(salesDate) AS Year,SUM(totalPrice) as Revenue_amount
FROM sales
where salesDate between'2023-01-01' AND '2023-12-12'
group by salesDate;

SELECT '2023' as Year,SUM(totalPrice) AS total_revenue
FROM sales
WHERE salesDate between '2023-01-01' AND '2023-12-31';


SELECT *
from sales;






























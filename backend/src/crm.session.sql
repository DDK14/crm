-- CREATE DATABASE crm;
use crm;

CREATE TABLE customer(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    -- quantity INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    order_date DATE,
    -- order_status ENUM('Pending', 'Processing', 'Completed', 'Cancelled') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO Customer (name, email, phone, address)
VALUES ('Deva', 'asd@gail.com', '1234567890', '123 Main St');
SELECT * FROM customer;

INSERT INTO orders (customer_id, product_name, order_date,amount)
VALUES ('1', 'bus', "2024-10-10", '5000');



drop TABLE visits;

DESCRIBE orders
DELETE from customer
DELETE from orders
ALTER TABLE orders  add order_date DATE

alter table orders drop column order_status ;

ALTER TABLE orders
RENAME COLUMN price to amount;


select customer_id,total_spending,total_visits,last_visit from
    (
        SELECT 
            c.id AS customer_id,
            c.name AS customer_name,
            SUM(o.amount) AS total_spending,
            COUNT(o.order_id) AS total_visits,
            MAX(o.order_date) AS last_visit
        FROM 
            customer c
        LEFT JOIN 
            orders o
        ON 
            c.id = o.customer_id
        GROUP BY 
            c.id
    ) subquery
     where month(now())-month(last_visit) <3;
  

SELECT * from customer

select * from visits
drop table visits

-- This automatically resets AUTO_INCREMENT to 1
SET  @num := 0;
UPDATE campaignTable SET campaign_id= @num := (@num+1);
ALTER TABLE campaignTable AUTO_INCREMENT =1;

drop table audience_conditions
-- create segments table
CREATE TABLE audience_conditions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    segment_name VARCHAR(255) NOT NULL,
    conditions_json JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO audience_conditions (segment_name, conditions_json) VALUES
('HighSpendingCustomers', '{"key":"total_spending", "operator": ">", "value": 10000}'),
('RareVisitors', '{"key":"total_visits", "operator": "<=", "value": 3}'),
('InactiveLast3Months', '{"key":"last_visit","operator": ">", "value": 3}');

select * from audience_conditions
delete from audience_conditions

CREATE TABLE campaignTable(
    campaign_id int AUTO_INCREMENT PRIMARY key,
    segment_id int not null,
    messages text,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (segment_id) REFERENCES audience_conditions(id) ON DELETE CASCADE ON UPDATE CASCADE
)
select * from campaignTable
drop table campaignTable
INSERT into campaignTable(segment_id,messages) VALUES(
    '1','Welcome message'
)
delete from campaignTable

CREATE table communications_log(
    com_id int AUTO_INCREMENT PRIMARY KEY,
    customer_id int not null,
    campaign_id int not null,
    com_status VARCHAR(255),
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (campaign_id) REFERENCES campaignTable(campaign_id) ON DELETE CASCADE ON UPDATE CASCADE
)

select * from communications_log
INSERT into communications_log(customer_id,)


create table customer_segment(
    id int AUTO_INCREMENT PRIMARY key,
    segment_id int not null,
    customer_id int not null
    
)
INSERT into customer_segment (segment_id,customer_id)VALUES('2','3')
select *  from customer_segment
drop table customer_segment



# Features

- Search book

## Customer

- Add Book To Cart
- Remove Book From Cart
- Create Order
- Payment

## Staff

- Add new book
- Delete book
- Update book
- Confirm/Cancel order

# Models

## Customer

- ID *!
- Email *!
- Username *!
- Password *
- Name
- Phone
- DOB
- Sex

## Staff

- ID *!
- Email *!
- Username *!
- Password *
- Name
- Phone
- DOB
- Sex

## Book

- Name *
- Publishing Year *
- Price *
- Author
- Quantity

## Order

- Create Date
- Customer ID
- Staff ID
- Status: Pending | Confirmed | Paid | Canceled
- List of [Book Name, Quantity, Price]
- Total

# What to do

1. [ ] Implement Models:
         - Customer
         - Staff
         - Book
         - Order
2. [ ] Implement Services:
         - Customer: create customer, get customer, update customer, ...
         - Staff:    create staff, get staff, update staff, ...
         - Book:     add book, delete book, update book, ...
         - Order:    create order, get order, update status, ...
3. [ ] Implement Routes:
         - Customer: register, login, logout, update info, ...
         - Staff: login, logout, update info, ...
4. [ ] Connect DB
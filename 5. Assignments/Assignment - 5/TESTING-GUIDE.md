# Book Management API - Testing Guide

## Server Status
✅ Server is running on `http://localhost:3000`

## How to Import Thunder Client Collection

1. Open Thunder Client in VS Code
2. Click on "Import" (folder icon with arrow)
3. Select `thunder-client-collection.json` from the project folder
4. All 11 test requests will be imported

## Testing Steps

### Step 1: Create Sample Books (Requests 1-4)
Execute these requests in order to create 4 sample books:
- **Request 1**: POST /books - "The Great Gatsby"
- **Request 2**: POST /books - "Dune"
- **Request 3**: POST /books - "The Murder of Roger Ackroyd"
- **Request 4**: POST /books - "The Lord of the Rings"

**Expected Response**: 201 Created with book data and MongoDB-generated _id

**Screenshot**: Capture the response showing the created book with ID

---

### Step 2: Get All Books (Request 5)
- **Request**: GET /books
- **Expected Response**: 200 OK with array of all 4 books
- **Screenshot**: Capture the complete list of all books

---

### Step 3: Get Book by ID (Request 6)
- **Request**: GET /books/{PASTE_BOOK_ID_HERE}
- **Action**: Copy the _id from one of the books created in Step 1
- **Expected Response**: 200 OK with the specific book details
- **Screenshot**: Capture the single book response

---

### Step 4: Update Book by ID (Request 7)
- **Request**: PUT /books/{PASTE_BOOK_ID_HERE}
- **Action**: Copy the _id from "The Great Gatsby" book
- **Body**: Update the title or publishedYear
- **Expected Response**: 200 OK with updated book data
- **Screenshot**: Capture the updated book response showing modified fields

---

### Step 5: Delete Book by ID (Request 8)
- **Request**: DELETE /books/{PASTE_BOOK_ID_HERE}
- **Action**: Copy the _id from a book you want to delete
- **Expected Response**: 200 OK with deleted book data
- **Screenshot**: Capture the deletion confirmation

---

### Step 6: Filter by Genre (Requests 9-11)
Execute genre filter requests:
- **Request 9**: GET /books/filter/genre?genre=Fiction
  - Expected: Books sorted by publishedYear (ascending)
  
- **Request 10**: GET /books/filter/genre?genre=Science%20Fiction
  - Expected: Science fiction books sorted by year
  
- **Request 11**: GET /books/filter/genre?genre=Fantasy
  - Expected: Fantasy books sorted by year

**Screenshot**: Capture at least one genre filter result

---

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /books | Create a new book |
| GET | /books | Get all books |
| GET | /books/:id | Get a book by ID |
| PUT | /books/:id | Update a book by ID |
| DELETE | /books/:id | Delete a book by ID |
| GET | /books/filter/genre?genre=xyz | Get books by genre (sorted by publishedYear) |

---

## Request/Response Examples

### Create Book (POST /books)
**Request Body:**
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925,
  "genre": "Fiction"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "67533d8c1a2b3c4d5e6f7g8h",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Fiction",
    "createdAt": "2025-12-09T10:30:00.000Z",
    "updatedAt": "2025-12-09T10:30:00.000Z"
  }
}
```

### Get All Books (GET /books)
**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "67533d8c1a2b3c4d5e6f7g8h",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publishedYear": 1925,
      "genre": "Fiction",
      "createdAt": "2025-12-09T10:30:00.000Z",
      "updatedAt": "2025-12-09T10:30:00.000Z"
    },
    ...more books
  ]
}
```

---

## Notes
- All timestamps are automatically added by MongoDB
- Genre filtering is case-insensitive
- Books are sorted by publishedYear in ascending order when filtering by genre
- Make sure MongoDB is running before testing
- Server logs all requests with timestamp in the console

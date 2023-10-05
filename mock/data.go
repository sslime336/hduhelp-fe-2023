package main

import "time"

type User struct {
	Id         string   `json:"id"`
	StaffId    string   `json:"staff_id"`
	Name       string   `json:"name"`
	Phone      string   `json:"phone"`
	Email      string   `json:"email"`
	Tags       []string `json:"tags"`
	UpdateTime string   `json:"update_time"`
	Removed    bool     `json:"-"`
}

// generated by ChatGPT-3.5

var Users = []User{
	{"001", "001", "John Doe", "123-456-7890", "john@example.com", []string{"tag1", "tag2"}, getTime(), false},
	{"002", "002", "Jane Smith", "987-654-3210", "jane@example.com", []string{"tag2", "tag3"}, getTime(), false},
	{"003", "003", "Alice Johnson", "555-555-5555", "alice@example.com", []string{"tag1", "tag4"}, getTime(), false},
	{"004", "004", "Bob Williams", "111-222-3333", "bob@example.com", []string{"tag3", "tag5"}, getTime(), false},
	{"005", "005", "Eva Davis", "444-555-6666", "eva@example.com", []string{"tag1", "tag2"}, getTime(), false},
	{"006", "006", "Michael Wilson", "777-888-9999", "michael@example.com", []string{"tag4", "tag5"}, getTime(), false},
	{"007", "007", "Olivia Brown", "333-222-1111", "olivia@example.com", []string{"tag2", "tag3"}, getTime(), false},
	{"008", "008", "David Lee", "999-888-7777", "david@example.com", []string{"tag1", "tag5"}, getTime(), false},
	{"009", "009", "Sophia Martin", "666-555-4444", "sophia@example.com", []string{"tag2", "tag4"}, getTime(), false},
	{"010", "010", "James Anderson", "222-333-4444", "james@example.com", []string{"tag1", "tag3"}, getTime(), false},
	{"011", "011", "Lily Martinez", "888-777-9999", "lily@example.com", []string{"tag3", "tag5"}, getTime(), false},
	{"012", "012", "William Moore", "111-111-1111", "william@example.com", []string{"tag1", "tag2"}, getTime(), false},
	{"013", "013", "Ava Taylor", "444-444-4444", "ava@example.com", []string{"tag4", "tag5"}, getTime(), false},
	{"014", "014", "Michael Harris", "777-777-7777", "michael@example.com", []string{"tag2", "tag3"}, getTime(), false},
	{"015", "015", "Emma Clark", "222-222-2222", "emma@example.com", []string{"tag1", "tag4"}, getTime(), false},
	{"016", "016", "Daniel Young", "333-333-3333", "daniel@example.com", []string{"tag3", "tag5"}, getTime(), false},
	{"017", "017", "Olivia Walker", "555-555-5555", "olivia@example.com", []string{"tag1", "tag2"}, getTime(), false},
	{"018", "018", "Sophia Lewis", "666-666-6666", "sophia@example.com", []string{"tag2", "tag4"}, getTime(), false},
	{"019", "019", "Ethan White", "888-888-8888", "ethan@example.com", []string{"tag1", "tag3"}, getTime(), false},
	{"020", "020", "Ava Turner", "111-111-1111", "ava@example.com", []string{"tag3", "tag5"}, getTime(), false},
	{"021", "021", "Logan Hall", "222-222-2222", "logan@example.com", []string{"tag1", "tag2"}, getTime(), false},
	{"022", "022", "Mia Allen", "333-333-3333", "mia@example.com", []string{"tag4", "tag5"}, getTime(), false},
	{"023", "023", "Noah Scott", "444-444-4444", "noah@example.com", []string{"tag2", "tag3"}, getTime(), false},
	{"024", "024", "Isabella King", "555-555-5555", "isabella@example.com", []string{"tag1", "tag4"}, getTime(), false},
	{"025", "025", "Liam Adams", "666-666-6666", "liam@example.com", []string{"tag3", "tag5"}, getTime(), false},
	{"026", "026", "Mia Wright", "777-777-7777", "mia@example.com", []string{"tag1", "tag2"}, getTime(), false},
	{"027", "027", "Jacob Green", "888-888-8888", "jacob@example.com", []string{"tag2", "tag4"}, getTime(), false},
	{"028", "028", "Emily Turner", "999-999-9999", "emily@example.com", []string{"tag1", "tag3"}, getTime(), false},
	{"029", "029", "William Hall", "000-000-0000", "william@example.com", []string{"tag3", "tag5"}, getTime(), false},
	{"030", "030", "Grace Allen", "123-123-1234", "grace@example.com", []string{"tag1", "tag2"}, getTime(), false},
}

func getTime() string {
	return time.Now().Format(time.DateTime)
}

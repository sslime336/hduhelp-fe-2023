export class User {
  staff_id;
  name;
  phone;
  email;
  update_time;

  constructor(staffId, name, phone, email, update_time) {
    this.staff_id = staffId;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.update_time = update_time;
  }
}

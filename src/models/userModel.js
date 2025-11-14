// Sample in-memory database
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: new Date() },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date() }
];

class UserModel {
  // Get all users
  static findAll() {
    return users;
  }

  // Find user by ID
  static findById(id) {
    return users.find(user => user.id === id);
  }

  // Find user by email
  static findByEmail(email) {
    return users.find(user => user.email === email);
  }

  // Create new user
  static create(userData) {
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      ...userData,
      createdAt: new Date()
    };
    users.push(newUser);
    return newUser;
  }

  // Update user
  static update(id, userData) {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    
    users[index] = {
      ...users[index],
      ...userData,
      updatedAt: new Date()
    };
    return users[index];
  }

  // Delete user
  static delete(id) {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return false;
    
    users.splice(index, 1);
    return true;
  }

  // Get total count
  static count() {
    return users.length;
  }
}

export default UserModel;

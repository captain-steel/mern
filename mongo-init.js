db.createUser({
  user: "captain-steel",
  pwd: "linkedin",
  roles: [
    {
      role: "readWrite",
      db: "mern"
    }
  ]
});

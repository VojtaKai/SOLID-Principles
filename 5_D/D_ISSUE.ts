namespace D_ISSUE {

    // The low level module (because it is the dependency)
    class MySQLConnection {
        connect() {
            console.log("Connecting to MySQL");
        }
    }

    // The high level module (because it is the class that uses the dependency)
    class PasswordReminder {
        // ISSUE: PasswordReminder is dependent on a specific class (MySQLConnection)
        // This is a violation of the Dependency Inversion Principle.
        // ISSUE: if you were to change the database engine 
        //      (e.g., from MySQL to PostgreSQL or an API service),
        //      you would also have to edit the PasswordReminder class, 
        //      which would violate the open-close principle, 
        //      as the class would need modification for extension.
        constructor(private dbConnection: MySQLConnection) {}

        remindPassword() {
            this.dbConnection.connect();
        }
    }

    const reminder = new PasswordReminder(new MySQLConnection());
    reminder.remindPassword();
}
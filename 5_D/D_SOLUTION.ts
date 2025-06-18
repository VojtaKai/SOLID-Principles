namespace D_SOLUTION {

    // SOLVED: Abstract class which defines exactly what the high level module needs.
    abstract class DatabaseConnection {
        abstract connect(): string;
    }

    // SOLVED: The low level module implements the abstract class.
    // The low level module (because it is the dependency)
    class MySQLConnection extends DatabaseConnection {
        connect() {
            console.log("Connecting to MySQL");
            // here would be the actual implementation of the connection
            return "Connected to MySQL";
        }
    }

    class PostgreSQLConnection extends DatabaseConnection {
        connect() {
            console.log("Connecting to PostgreSQL");
            // here would be the actual implementation of the connection
            return "Connected to PostgreSQL";
        }
    }

    // The high level module (because it is the class that uses the dependency)
    class PasswordReminder {
        // SOLVED: The high level module depends on the abstract class.
        constructor(private dbConnection: DatabaseConnection) {}

        remindPassword() {
            const status = this.dbConnection.connect();
            return status ? "Password reminder sent" : "DB Connection failed";
        }
    }

    const reminder = new PasswordReminder(new MySQLConnection());
    const reminder2 = new PasswordReminder(new PostgreSQLConnection());
}
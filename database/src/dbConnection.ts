import { MongoClient, Db } from 'mongodb';
class DbConnector {
  private static instance: DbConnector;
  private readonly client: MongoClient;

  private constructor(connectionString: string) {
    this.client = new MongoClient(connectionString);
  }

  static getInstance(connectionString: string): DbConnector {
    if (!DbConnector.instance) {
      DbConnector.instance = new DbConnector(connectionString);
    }
    return DbConnector.instance;
  }

  async connect(database: string): Promise<Db> {
    try {
      await this.client.connect();
      console.log('Connected to MongoDB');

      return this.client.db(database);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  async close(): Promise<void> {
    await this.client.close();
    console.log('Connection to MongoDB closed');
  }
}

export default DbConnector;

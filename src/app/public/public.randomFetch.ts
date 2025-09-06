class randomFetch {
  private static url = "https://randomuser.me/api/";

  public static async fetchRandomUser() {
    try {
      const response = await fetch(this.url);
      return response.json();
    } catch (error) {
      console.error("Error fetching random user: err omitted");
    }
  }

  public static async fetchManyRandomUser(count: number) {
    try {
      let response: any[] = [];

      for (let i = 0; i < count; i++) {
        response.push(await this.fetchRandomUser());
      }

      return response;
    } catch (error) {
      console.error("Error fetching random user: err omitted!");
    }
  }
}

export default randomFetch;

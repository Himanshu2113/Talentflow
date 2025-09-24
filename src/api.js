import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      let jobs = [
        { id: "1", title: "Frontend Dev", status: "active" },
        { id: "2", title: "Backend Dev", status: "archived" },
      ];

      let candidates = [
        { id: "1", name: "Alice", email: "alice@mail.com", stage: "applied" },
        { id: "2", name: "Bob", email: "bob@mail.com", stage: "tech" },
      ];

      this.get("/jobs", () => jobs);
      this.post("/jobs", (schema, req) => {
        let job = JSON.parse(req.requestBody);
        job.id = String(jobs.length + 1);
        jobs.push(job);
        return job;
      });

      this.get("/candidates", () => candidates);
      this.post("/candidates", (schema, req) => {
        let c = JSON.parse(req.requestBody);
        c.id = String(candidates.length + 1);
        candidates.push(c);
        return c;
      });
    },
  });
}

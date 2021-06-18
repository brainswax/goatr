require('custom-env').env(process.env.NODE_ENV);

describe('Test environment variables', () => {
   it("Ensure required variables exist", () => {
      expect(process.env.SLACK_HOOK).toBeDefined();
   });
});

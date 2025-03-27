//src/app/api/route.js
export async function GET() {
    return Response.json({
      message: `Hello World`,
    });
  }
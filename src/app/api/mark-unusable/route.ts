import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username } = body;

    // Validate required fields
    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    // Get the session cookie from the incoming request
    const sessionCookie = request.cookies.get('session');
    
    if (!sessionCookie) {
      return NextResponse.json(
        { error: 'Session cookie not found' },
        { status: 401 }
      );
    }

    // Make request to the backend API
    const backendResponse = await fetch('https://vexa-backend.greybatter.com/api/mark_unusable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Forward the session cookie to the backend
        'Cookie': `session=${sessionCookie.value}`
      },
      body: JSON.stringify({
        username: username
      })
    });

    // Get response data
    const responseData = await backendResponse.text();
    let jsonData;
    
    try {
      jsonData = JSON.parse(responseData);
    } catch {
      // If response is not JSON, treat as text
      jsonData = { message: responseData };
    }

    // Return the response from the backend
    if (!backendResponse.ok) {
      return NextResponse.json(
        { 
          error: jsonData?.message || responseData || 'Failed to mark user as unusable',
          status: backendResponse.status 
        },
        { status: backendResponse.status }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        message: jsonData?.message || 'User marked as unusable successfully',
        data: jsonData
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in mark-unusable API route:', error);
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Internal server error',
        status: 500
      },
      { status: 500 }
    );
  }
}

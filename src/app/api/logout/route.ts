import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the session cookie from the incoming request
    const sessionCookie = request.cookies.get('session');
    
    if (!sessionCookie) {
      return NextResponse.json(
        { error: 'Session cookie not found' },
        { status: 401 }
      );
    }

    // Make request to the backend API
    const backendResponse = await fetch('https://vexa-backend.greybatter.com/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Forward the session cookie to the backend
        'Cookie': `session=${sessionCookie.value}`
      }
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

    // Create response
    const response = NextResponse.json(
      { 
        success: backendResponse.ok,
        message: jsonData?.message || (backendResponse.ok ? 'Logout successful' : 'Logout failed'),
        data: jsonData
      },
      { status: backendResponse.status }
    );

    // If logout was successful, clear the session cookie
    if (backendResponse.ok) {
      response.cookies.set('session', '', {
        expires: new Date(0),
        path: '/',
        httpOnly: true
      });
    }

    return response;

  } catch (error) {
    console.error('Error in logout API route:', error);
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Internal server error',
        success: false
      },
      { status: 500 }
    );
  }
}

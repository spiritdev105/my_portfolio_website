import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const logContent = await request.text();
    const timestamp = Date.now();
    const filename = `${timestamp}.txt`;
    const bucketName = 'logs'; // Replace with your Supabase bucket name

    // Upload file to Supabase
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filename, new Blob([logContent]), {
        contentType: 'text/plain',
      });

    if (error) {
      console.error('Error uploading to Supabase:', error);
      return NextResponse.json({ message: 'Failed to upload to Supabase' }, { status: 500 });
    }

    console.log('File uploaded to Supabase successfully');
    return NextResponse.json({ message: 'File uploaded to Supabase successfully', data }, { status: 200 });

  } catch (error) {
    console.error('Error processing log file:', error);
    return NextResponse.json({ message: 'Failed to process log file' }, { status: 500 });
  }
}
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gvpwnfcitbtnidkmuedu.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2cHduZmNpdGJ0bmlka211ZWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5OTQyMzIsImV4cCI6MjA3MDU3MDIzMn0.Q3WBOa3vTIVMBAlKQaPK_YR-D0KysnuydI52VpJqiyw';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

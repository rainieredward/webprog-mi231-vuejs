import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://oqohwxhuvtepceiezllg.supabase.co',
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xb2h3eGh1dnRlcGNlaWV6bGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NzkwMTksImV4cCI6MjA1NzE1NTAxOX0.1aagqFGzuJp9V2HSrApXxPLL3Hh_QoX2BXcRDuk65dE')
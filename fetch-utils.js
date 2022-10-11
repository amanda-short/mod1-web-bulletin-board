const SUPABASE_URL = 'https://zdnmoptevevfiyieywuy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpkbm1vcHRldmV2Zml5aWV5d3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQyOTczNjUsImV4cCI6MTk3OTg3MzM2NX0.koYUTszT6YJZvITkdoQt__LGGIXh6Z2M8j4miQvz4qQ';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createPost(post) {
    return await client.from('posts')
        .insert(post);
}

export async function getPosts() {
    return await client.from('posts')
        .select('*');
} 

export async function getPost(id) {
    return await client.from('posts')
        .select('*')
        .eq('id', id)
        .order('created_at')
        .single();
}

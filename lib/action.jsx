'use server'
export async function saveMeals(formData) {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image')
    }

}

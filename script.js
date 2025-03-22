function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.remove('hidden');

    // If showing result page, simulate loading
    if (pageId === 'result-page') {
        const loading = selectedPage.querySelector('.loading');
        const content = selectedPage.querySelector('.result-content');
        
        loading.classList.remove('hidden');
        content.classList.add('hidden');

        // Show results after 2 seconds
        setTimeout(() => {
            loading.classList.add('hidden');
            content.classList.remove('hidden');
        }, 2000);
    }
}
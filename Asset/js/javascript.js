const originalTitle = document.title;
        const newTitle = "Come back!";
        
        window.addEventListener('blur', () => {
            document.title = newTitle;
        });
        
        window.addEventListener('focus', () => {
            document.title = originalTitle;
        });
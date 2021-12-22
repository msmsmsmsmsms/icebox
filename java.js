            function ToggleMenu(){
                const button = document.getElementById('burger')
                const menu = document.getElementById('nav')
    
                button.classList.toggle('active')
                menu.classList.toggle('active')
            }

            function onEntry(entry) {
                entry.forEach(change => {
                    if (change.isIntersecting) {
                        change.target.classList.add('show');
                        }
                });
            }
            let options = { threshold: [0.5] };
            let observer = new IntersectionObserver(onEntry, options);
            let elements = document.querySelectorAll('.content-left, .content-right, span');
            for (let elm of elements) {
                 observer.observe(elm);
                }
            function ToggleMenu(){
                const button = document.getElementById('burger')
                const menu = document.getElementById('nav')
    
                button.classList.toggle('active')
                menu.classList.toggle('active')
            }

            function onEntry(entry) {
                entry.forEach(change => {
                    if (change.isIntersecting) {
                        change.target.classList.add('show');
                        }
                });
            }
            let options = { threshold: [0.5] };
            let observer = new IntersectionObserver(onEntry, options);
            let elements = document.querySelectorAll('.content-left, .content-right, span');
            for (let elm of elements) {
                 observer.observe(elm);
                }
            function ToggleMenu(){
                const button = document.getElementById('burger')
                const menu = document.getElementById('nav')
    
                button.classList.toggle('active')
                menu.classList.toggle('active')
            }

            function onEntry(entry) {
                entry.forEach(change => {
                    if (change.isIntersecting) {
                        change.target.classList.add('show');
                        }
                });
            }
            let options = { threshold: [0.5] };
            let observer = new IntersectionObserver(onEntry, options);
            let elements = document.querySelectorAll('.content-left, .content-right, span');
            for (let elm of elements) {
                 observer.observe(elm);
                }

<script>
        const menuLinks = document.querySelectorAll(".menu-link");

        menuLinks.forEach(link => {
            link.addEventListener("mouseenter", function() {
                this.classList.add("highlight");
            });

            link.addEventListener("mouseleave", function() {
                this.classList.remove("highlight");
            });
        });
    </script>
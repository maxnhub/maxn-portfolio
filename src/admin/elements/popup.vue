<script>
export default {
  mounted() {
    function renderPopup() {
      const popup = document.querySelector(".popup__field");
      const body = document.querySelector("body");
      popup.classList.add("popup__field--active");
      body.classList.add("body--active");

      popup.querySelector(".popup__exit").addEventListener("click", e => {
        e.preventDefault();

        popup.classList.remove("popup__field--active");
        body.classList.remove("body--active");
      });
    }

    function showPopup() {
      const button = document.querySelector(".add-group");
      button.addEventListener("click", e => {
        renderPopup();
      });
    }
  }
};
</script>
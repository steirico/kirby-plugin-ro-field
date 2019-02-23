panel.plugin("steirico/kirby-plugin-ro-field", {
  fields: {
    ro: {
      props: {
        label: String,
        value: String
      },
      template: `
        <k-field v-bind="$props" class="k-ro-field">
          <div v-html="value"></div>
        </k-field>
      `
    }
  }
});
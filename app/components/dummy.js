import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  countries: computed(function() {
    return [
      {name: "USA"},
      {name: "Germany"}
    ]
  }),
  actions: {
    foo() {
      console.log('bars have been called')
    },
    createCountry() {
      console.log('bars have been called')
    }
  }
});

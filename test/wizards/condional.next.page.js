import _map from 'lodash/map';
import assert from 'power-assert';
import { Harness } from '../harness';
module.exports = {
  title: 'Wizard With Conditional Next Page',
  form: {
    _id: '58cdd541d482d500aaf48368',
    machineName: 'eguamgudzerbvzc:wizard',
    modified: '2017-03-19T00:48:02.035Z',
    title: 'Wizard',
    display: 'wizard',
    name: 'wizard',
    path: 'wizard',
    project: '58cc056767cb9600a75712e2',
    created: '2017-03-19T00:48:01.666Z',
    components: [{
      key: 'panel1',
      input: false,
      title: 'Page 1',
      nextPage: 'if (data.a == "goTo2") { page = 2; } else { page = 1; }',
      theme: 'default',
      components: [{
        input: true,
        tableView: true,
        inputType: 'text',
        inputMask: '',
        label: 'a',
        key: 'a',
        placeholder: '',
        prefix: '',
        suffix: '',
        multiple: false,
        defaultValue: '',
        protected: false,
        unique: false,
        persistent: true,
        clearOnHide: true,
        validate: {required: true, minLength: '', maxLength: '', pattern: '', custom: '', customPrivate: false},
        conditional: {show: '', when: null, eq: ''},
        type: 'textfield',
        tags: []
      }, {
        input: true,
        tableView: true,
        inputType: 'text',
        inputMask: '',
        label: 'b',
        key: 'b',
        placeholder: '',
        prefix: '',
        suffix: '',
        multiple: false,
        defaultValue: '',
        protected: false,
        unique: false,
        persistent: true,
        clearOnHide: true,
        validate: {required: false, minLength: '', maxLength: '', pattern: '', custom: '', customPrivate: false},
        conditional: {show: '', when: null, eq: ''},
        type: 'textfield',
        tags: []
      }],
      type: 'panel',
      tags: [],
      conditional: {show: '', when: null, eq: ''}
    }, {
      key: 'panel2',
      input: false,
      title: 'Page 2',
      theme: 'default',
      nextPage: 'if (data.c == "directSubmit") { page = null; }',
      components: [{
        input: true,
        tableView: true,
        inputType: 'text',
        inputMask: '',
        label: 'c',
        key: 'c',
        placeholder: '',
        prefix: '',
        suffix: '',
        multiple: false,
        defaultValue: '',
        protected: false,
        unique: false,
        persistent: true,
        clearOnHide: true,
        validate: {required: false, minLength: '', maxLength: '', pattern: '', custom: '', customPrivate: false},
        conditional: {show: '', when: null, eq: ''},
        type: 'textfield',
        tags: []
      }, {
        input: true,
        tableView: true,
        inputType: 'text',
        inputMask: '',
        label: 'd',
        key: 'd',
        placeholder: '',
        prefix: '',
        suffix: '',
        multiple: false,
        defaultValue: '',
        protected: false,
        unique: false,
        persistent: true,
        clearOnHide: true,
        validate: {required: false, minLength: '', maxLength: '', pattern: '', custom: '', customPrivate: false},
        conditional: {show: '', when: null, eq: ''},
        type: 'textfield',
        tags: []
      }],
      type: 'panel',
      tags: [],
      conditional: {show: '', when: null, eq: ''}
    }, {
      key: 'panel3',
      input: false,
      title: 'Page 3',
      theme: 'default',
      components: [{
        input: true,
        tableView: true,
        inputType: 'text',
        inputMask: '',
        label: 'e',
        key: 'e',
        placeholder: '',
        prefix: '',
        suffix: '',
        multiple: false,
        defaultValue: '',
        protected: false,
        unique: false,
        persistent: true,
        clearOnHide: true,
        validate: {required: false, minLength: '', maxLength: '', pattern: '', custom: '', customPrivate: false},
        conditional: {show: '', when: null, eq: ''},
        type: 'textfield',
        tags: []
      }, {
        input: true,
        tableView: true,
        inputType: 'text',
        inputMask: '',
        label: 'f',
        key: 'f',
        placeholder: '',
        prefix: '',
        suffix: '',
        multiple: false,
        defaultValue: '',
        protected: false,
        unique: false,
        persistent: true,
        clearOnHide: true,
        validate: {required: false, minLength: '', maxLength: '', pattern: '', custom: '', customPrivate: false},
        conditional: {show: '', when: null, eq: ''},
        type: 'textfield',
        tags: []
      }, {
        input: true,
        tableView: true,
        inputType: 'text',
        inputMask: '',
        label: 'g',
        key: 'g',
        placeholder: '',
        prefix: '',
        suffix: '',
        multiple: false,
        defaultValue: '',
        protected: false,
        unique: false,
        persistent: true,
        clearOnHide: true,
        validate: {required: false, minLength: '', maxLength: '', pattern: '', custom: '', customPrivate: false},
        conditional: {show: '', when: null, eq: ''},
        type: 'textfield',
        tags: []
      }],
      type: 'panel',
      tags: [],
      conditional: {show: '', when: null, eq: ''}
    }, {
      input: true,
      label: 'Submit',
      tableView: false,
      key: 'submit',
      size: 'md',
      leftIcon: '',
      rightIcon: '',
      block: false,
      action: 'submit',
      disableOnInvalid: false,
      theme: 'primary',
      type: 'button'
    }],
    owner: '57605b5965901601001cbbd2',
    submissionAccess: [],
    access: [{
      type: 'read_all',
      roles: ['58cc056767cb9600a75712e3', '58cc056767cb9600a75712e4', '58cc056767cb9600a75712e5']
    }],
    tags: [],
    type: 'form'
  },
  tests: {
    /**
     * Test Schema:
     * - Wizard With Condinal Next Page: ByPass page
     *    'a' == 'goTo2' => click on 'Next' page bypass page 1
     * - Wizard With Condinal Next Page: Direct Submit
     *    'c' == 'directSubmit' => Submit direclty and bypass page 2
     */

    'Wizard With Condinal Next Page: ByPass page': (form, done) => {

      // Check current page
      assert.equal(form.page, 0);
      Harness.testElements(form, 'input[type="text"]', 2);
      let buttonsToValid = ['Cancel', 'Next'];
      let buttonsText =  _map(Harness.testElements(form, 'button'), (button) => button.innerText);
      assert.deepEqual(buttonsText, buttonsToValid);


      // Write data
      let wizardData = {
        a: 'goTo2',
        b: 'b'
      };
      Harness.testSubmission(form, {
        data: wizardData
      });

      // Go to page 2 (due to condional nextPage function)
      return Harness.testWizardNextPage(form)
        .catch((error) => {
          // Should returns a success
          done(error);
        })
        .then(() => {
          // Check next page
          assert.equal(form.page, 2);
          Harness.testElements(form, 'input[type="text"]', 3);
          let buttonsToValid = ['Cancel', 'Previous', 'Submit Form'];
          let buttonsText =  _map(Harness.testElements(form, 'button'), (button) => button.innerText);
          assert.deepEqual(buttonsText, buttonsToValid);
        })


        .then(() => {
          // Write data
          let wizardData = {
            a: 'goTo2',
            b: 'b',
            e: 'e',
            f: 'f',
            g: 'g'
          };
          Harness.testSubmission(form, {
            data: wizardData
          });
        })
        .then(() => {
          // Go to first page.
          return Harness.testWizardPrevPage(form, null, (data) => {
            // Check prevPage event
            assert.equal(data.page, 0);
            assert.deepEqual(data.submission.data, {
              a: 'goTo2',
              b: 'b',
              e: 'e',
              f: 'f',
              g: 'g'
            });
          });
        })
        .catch((error) => {
          // Should returns a success
          done(error);
        })
        .then(() => {
          // Check previous page
          assert.equal(form.page, 0);
          Harness.testElements(form, 'input[type="text"]', 2);
          let buttonsToValid = ['Cancel', 'Next'];
          let buttonsText =  _map(Harness.testElements(form, 'button'), (button) => button.innerText);
          assert.deepEqual(buttonsText, buttonsToValid);
        })


        .then(() => {
          // Go to last page.
          return Harness.testWizardNextPage(form, null, (data) => {
            // Check nextPage event
            assert.equal(data.page, 2);
            assert.deepEqual(data.submission.data, {
              a: 'goTo2',
              b: 'b',
              e: 'e',
              f: 'f',
              g: 'g'
            });
          });
        })
        .catch((error) => {
          // Should returns a success
          done(error);
        })
        .then(() => {
          // Check last page
          assert.equal(form.page, 2);
          Harness.testElements(form, 'input[type="text"]', 3);
          let buttonsToValid = ['Cancel', 'Previous', 'Submit Form'];
          let buttonsText =  _map(Harness.testElements(form, 'button'), (button) => button.innerText);
          assert.deepEqual(buttonsText, buttonsToValid);
        })


        .then(() => {
          // Write data
          let wizardData = {
            a: 'goTo2',
            b: 'b',
            e: 'e',
            f: 'f',
            g: 'g'
          };
          Harness.testSubmission(form, {
            data: wizardData
          });
        })
        .then(() => {
          // Check submit event
          form.on('submit', (submission) => {
            assert.deepEqual(submission.data, {
              a: 'goTo2',
              b: 'b',
              e: 'e',
              f: 'f',
              g: 'g'
            });
          });
          // Submit
          return form.submit();
        })
        .then((submission) => {
          // Check submission
          assert.deepEqual(submission.data, {
            a: 'goTo2',
            b: 'b',
            e: 'e',
            f: 'f',
            g: 'g'
          });
        })
        .catch((error) => {
          // Should returns a success
          done(error);
        })

        // Call done
        .then(() => {
          done();
        })
    },

    'Wizard With Condinal Next Page: Direct Submit': (form, done) => {

      // Check current page
      assert.equal(form.page, 0);
      Harness.testElements(form, 'input[type="text"]', 2);
      let buttonsToValid = ['Cancel', 'Next'];
      let buttonsText =  _map(Harness.testElements(form, 'button'), (button) => button.innerText);
      assert.deepEqual(buttonsText, buttonsToValid);


      // Write data
      let wizardData = {
        a: 'a',
        b: 'b'
      };
      Harness.testSubmission(form, {
        data: wizardData
      });

      // Go to page 1
      return Harness.testWizardNextPage(form)
        .catch((error) => {
          // Should returns a success
          done(error);
        })
        .then(() => {
          // Check next page
          assert.equal(form.page, 1);
          Harness.testElements(form, 'input[type="text"]', 2);
          let buttonsToValid = ['Cancel', 'Previous', 'Next'];
          let buttonsText =  _map(Harness.testElements(form, 'button'), (button) => button.innerText);
          assert.deepEqual(buttonsText, buttonsToValid);
        })


        .then(() => {
          // Check updateWizardNav event
          form.on('updateWizardNav', (change) => {
            assert.equal(change.oldpage, 2);
            assert.equal(change.newpage, null);
            // Check submission
            assert.deepEqual(change.submission.data, {
              a: 'a',
              b: 'b',
              c: 'directSubmit',
              d: '',
            });
          });

          // Write data
          let wizardData = {
            a: 'a',
            b: 'b',
            c: 'directSubmit',
            d: ''
          };
          Harness.testSubmission(form, {
            data: wizardData
          });

          // Add delay to wait for the componentsChange event
          return new Promise(resolve => setTimeout(resolve, 250));
        })
        .then(() => {
          // Should show a submit button instead of next button
          let buttonsToValid = ['Cancel', 'Previous', 'Submit Form'];
          let buttonsText =  _map(Harness.testElements(form, 'button'), (button) => button.innerText);
          assert.deepEqual(buttonsText, buttonsToValid);
        })


        .then(() => {
          // Check submit event
          form.on('submit', (submission) => {
            assert.deepEqual(submission.data, {
            a: 'a',
            b: 'b',
            c: 'directSubmit',
            d: '',
            });
          });
          // Submit
          return form.submit();
        })
        .then((submission) => {
          // Check submission
          assert.deepEqual(submission.data, {
            a: 'a',
            b: 'b',
            c: 'directSubmit',
            d: '',
          });
        })
        .catch((error) => {
          // Should returns a success
          done(error);
        })

        // Call done
        .then(() => {
          done();
        })
    }
  }
};

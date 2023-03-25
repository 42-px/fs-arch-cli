import { requiredValidator } from '@/lib/form-validators'
import { createForm } from 'effector-forms'
import { d } from './domain'

export const loginForm = createForm({
    domain: d,
    fields: {
        phone: {
            init: '',
            rules: [requiredValidator,],
        },
        password: {
            init: '',
            rules: [requiredValidator],
        },
    },
    validateOn: ['submit'],
})

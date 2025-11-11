# Formik Example Components

This directory contains **example implementations** using Formik and Yup.

## ⚠️ NOT Currently in Use

These components are **NOT** being used in the application. They are kept here as:
- Reference implementations
- Ready for future migration
- Examples of best practices

## Current Implementation

The application currently uses:
- Manual form hooks (`src/hooks/useForm.ts`, `src/hooks/useLoginForm.ts`)
- Manual validators (`src/lib/validators/`)

Located in:
- `src/modules/auth/components/LoginForm.tsx` (current version)

## Migration Guide

To switch to Formik version:

1. **Replace the import in login page:**
   ```tsx
   // Before
   import { LoginForm } from "@/modules/auth/components";

   // After
   import { LoginFormFormik as LoginForm } from "@/modules/auth/components/formik-examples";
   ```

2. **Or rename files:**
   ```bash
   # Backup current version
   mv src/modules/auth/components/LoginForm.tsx src/modules/auth/components/LoginForm.manual.tsx

   # Use Formik version
   mv src/modules/auth/components/formik-examples/LoginFormFormik.tsx src/modules/auth/components/LoginForm.tsx
   ```

## Benefits of Formik

When you switch to Formik:

✅ **Industry Standard**: Used by thousands of projects
✅ **Less Code**: Formik handles boilerplate
✅ **Better Validation**: Yup provides powerful validation
✅ **Field-level Validation**: Validates as user types
✅ **Touched State**: Knows which fields user interacted with
✅ **Type Safety**: Better TypeScript integration
✅ **Ecosystem**: Lots of plugins and integrations

## File Structure

```
formik-examples/
├── README.md (this file)
├── LoginFormFormik.tsx (Formik version of LoginForm)
└── (future formik components)
```

## Related Files

**Yup Schemas:**
- `src/lib/schemas/auth.schema.ts` - Login validation schema
- `src/lib/schemas/contact.schema.ts` - Contact form validation schema

**Formik Hooks:**
- `src/hooks/formik/useLoginFormFormik.ts` - Login form hook
- `src/hooks/formik/useContactFormFormik.ts` - Contact form hook

## See Also

Refer to `FORMIK_MIGRATION_GUIDE.md` in the root directory for complete migration instructions.

import React from 'react'
import { FormField, FormControl, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up');

interface CustomInputProps {
    control?: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>
    label: string;
    placeholder: string;
    type?: string;
}

const CustomInput = ({ control, name, label, placeholder, type }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className='flex flex-col w-full'>
                        <FormControl>
                            <Input placeholder={placeholder} type={type} className='input-class' {...field} />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput
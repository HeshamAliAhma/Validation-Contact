import { Field, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';

interface IProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Update here
    error?: string;
    name?: string;
}

const DescriptionStyle = 'mt-2 block w-full resize-none font-bold rounded-sm border border-gray-300 focus:border-blue-600 bg-white p-2 text-sm text-gray-700';

const Description = ({ value, onChange, error,name }: IProps) => {
    return (
        <div className="col-span-6">
            <Field>
                <Label className="block text-sm font-medium text-gray-700">Description</Label>
                <Textarea
                    className={clsx(
                        `${DescriptionStyle} ${error ? 'border-red-500' : ''}`,
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                    )}
                    rows={3}
                    value={value}
                    onChange={onChange} // Passing the event to the handler
                    name={name}
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </Field>
        </div>
    );
}

export default Description;

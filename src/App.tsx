import { FC, useEffect } from 'react';
import { useState } from 'react';

import './style.css';
import { formatSsn, maskSsn } from './utils';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default function Form() {
  const [ssn, setSsn] = useState<string>('');
  const [maskedSsn, setMaskedSsn] = useState<string>('');

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    let input: string = event.currentTarget.value;
    if (input.length > 9) return;
    setSsn(input);
  };

  useEffect(() => setMaskedSsn(formatSsn(maskSsn(ssn))), [ssn]);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <input disabled id="shown" value={maskedSsn} type="text" />
        <input
          id="hidden"
          value={ssn}
          onChange={handleOnChange}
          type="number"
        />
      </div>
      {/* Only added for demo for showing the final value */}
      <div>Your ssn is: {ssn}</div>
    </>
  );
}

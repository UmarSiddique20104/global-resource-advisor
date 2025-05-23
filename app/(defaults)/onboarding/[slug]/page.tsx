import React from 'react';
import type { searchParams } from '@/app/types/common';
import MCA_Company from '@/components/pages/mca-company/MCACompany';
import Onboarding from '@/components/pages/onboarding/Onboarding';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <Onboarding id={id} mode={modeValue} />
        </div>
    );
};

export default page;

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { Preview } from '@/app/sections/preview';
import modelDetail from '@/assets/image/model-detail.png';
import AppStore from '@/assets/svg/app-store.svg?react';
import canUse1 from '@/assets/svg/can-use-1.svg';
import canUse2 from '@/assets/svg/can-use-2.svg';
import canUse3 from '@/assets/svg/can-use-3.svg';
import canUse4 from '@/assets/svg/can-use-4.svg';
import canUse5 from '@/assets/svg/can-use-5.svg';
import DownloadApk from '@/assets/svg/download-apk.svg?react';
import IndexClassification from '@/assets/svg/index-classification.svg?react';
import Icon from '@/assets/svg/logo.svg?react';
import OutstandingAccuracy from '@/assets/svg/outstanding-accuracy.svg?react';
import Technology from '@/assets/svg/technology.svg?react';
import { cn } from '@/utils';

const headline1 = cn('text-3xl xl:text-4xl');
const headline2 = cn('text-2xl xl:text-3xl');
const title1 = cn('text-xl xl:text-2xl');
const label1 = cn('text-base lg:text-lg xl:text-xl');
const label2 = cn('text-sm');
const section = cn('py-12 max-md:px-3 lg:py-16 xl:py-20');

export default function Home() {
  return (
    <main>
      <section
        className="relative flex min-h-screen flex-col items-center justify-center bg-contain bg-center"
        style={{
          backgroundImage: `url(./background.svg)`,
        }}>
        <div className="z-10 bg-[#171717] px-12 py-8 lg:px-16 lg:py-14 xl:px-20 xl:py-16">
          <div className="mb-4 flex items-center justify-center gap-4 md:mb-8 md:gap-8">
            <Icon className="size-16 text-white lg:size-20 xl:size-28" />
            <h1 className="text-4xl font-semibold text-white lg:text-5xl xl:text-7xl">
              AirQ AI
            </h1>
          </div>
          <h2 className={cn(headline1, 'text-xl font-semibold text-white')}>
            AI Air Quality Estimation
          </h2>
        </div>
        <div className="mt-10 flex items-center gap-12">
          <a href="https://apps.apple.com/app/airq-ai/id6736584831">
            <AppStore className="h-10 w-auto md:h-14" />
          </a>
          <a href="airQ_ai.apk">
            <DownloadApk className="h-10 w-auto md:h-14" />
          </a>
        </div>
      </section>

      <Preview />

      <section className={cn(section, 'bg-[#2B2B2B]')}>
        <div className="container mx-auto">
          <h3 className={cn(headline2, 'font-semibold text-white')}>
            You can use it when...
          </h3>
          <div className="mb-5 mt-3 grid grid-cols-12 gap-3 md:mb-10 md:mt-6 lg:gap-4 xl:gap-6">
            {[
              {
                title: 'Morning Jog',
                description:
                  'Snap a photo outside, get instant air quality assessment and jogging recommendation.',
                image: canUse1,
              },
              {
                title: "Kids' Playtime",
                description:
                  "Take a picture at the park entrance, receive air quality-based advice for kids' outdoor time.",
                image: canUse2,
              },
              {
                title: 'Ventilation Check',
                description:
                  'Photograph the outdoor view, get suggestions on ventilation timing.',
                image: canUse3,
              },
              {
                title: 'Mask Decision',
                description:
                  'Capture the outdoor scene, receive mask-wearing recommendations based on air quality.',
                image: canUse4,
              },
              {
                title: 'Travel Planning',
                description:
                  'Analyze photos of the destination (e.g., from live webcams) to assess air quality for the trip.',
                image: canUse5,
              },
            ].map((item, index) => (
              <CanUseCard
                key={index}
                className={cn(
                  'max-lg:col-span-6 max-md:col-span-12',
                  index > 2 ? 'col-span-6 grid-cols-subgrid' : 'col-span-4',
                )}
                item={item}
                isCol={index < 3}
              />
            ))}
          </div>
          <h3 className={cn(headline2, 'font-semibold text-white')}>
            ...and so on
          </h3>
        </div>
      </section>

      <section className={cn(section, 'bg-[#222222]')}>
        <div className="container mx-auto">
          <h3
            className={cn(headline1, 'mb-5 font-semibold text-white md:mb-10')}>
            Why we do this?
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
            {[
              {
                question: 'Empowering Citizens for Cleaner Skies',
                answer:
                  'Gives live air data, boosting eco-awareness. Quick info spurs action: cut pollution, report issues.',
              },
              {
                question: 'Data-Driven Pollution Control',
                answer:
                  'App maps air quality, pinpoints hot spots. Helps poor regions target policies, save resources.',
              },
              {
                question: 'Green Growth, Healthier Communities',
                answer:
                  'Guides businesses, warns public. Balances growth and health.',
              },
            ].map((item, index) => (
              <div key={index}>
                <p
                  className={cn(
                    title1,
                    'mb-2.5 font-medium text-white md:mb-5',
                  )}>
                  {item.question}
                </p>
                <span className={cn(label1, 'font-normal text-[#DFDDDD]')}>
                  {item.answer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={cn(section, 'bg-contain bg-center')}
        style={{
          backgroundImage: `url(./background2.svg)`,
        }}>
        <div className="container mx-auto">
          <h3 className={cn(headline1, 'mb-10 font-semibold text-white')}>
            Design and Principle
          </h3>
          <div className="flex flex-col items-center gap-6 md:flex-row">
            {[
              {
                Icon: IndexClassification,
                title: 'Revolutionary Image Recognition Technology',
                description:
                  'Uses advanced AI, specifically EfficientNet, to assess air quality from simple photos. This innovation replaces traditional sensors, revolutionizing environmental monitoring.',
              },
              {
                Icon: OutstandingAccuracy,
                title: 'Six-Level Air Quality Index Classification',
                description:
                  "Classifies air quality into six levels, from 'Good' to 'Hazardous'. This detailed categorization provides accurate health risk assessments for all population groups.",
              },
              {
                Icon: Technology,
                title: 'Outstanding Accuracy',
                description:
                  'Boasts 98-99% accuracy across all air quality categories. This high precision ensures reliable data for environmental management and public health decisions.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="self-stretch md:border-l md:border-white md:pl-6 md:first:border-none md:first:pl-0">
                {<item.Icon className="size-10 md:size-20" />}
                <p
                  className={cn(
                    title1,
                    'mb-2.5 mt-5 font-semibold text-white md:mb-5 md:mt-10',
                  )}>
                  {item.title}
                </p>
                <span className={cn(label1, 'font-normal text-white')}>
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={cn(section, 'bg-[#222222]')}>
        <div className="container mx-auto">
          <h3
            className={cn(
              headline1,
              'mb-10 text-center font-semibold text-[#DFDDDD]',
            )}>
            Model in Detail
          </h3>
          <Image
            src={modelDetail}
            alt="model in detail"
          />
        </div>
      </section>

      <section className={cn(section, 'bg-[#1D1D1D]')}>
        <div className="container mx-auto">
          <h3
            className={cn(headline1, 'mb-10 text-center font-bold text-white')}>
            Air Quality Index Classes
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
            {[
              {
                className: cn('bg-[#B1FF47]'),
                title: 'Good (0-50)',
                description:
                  'Satisfactory air quality with minimal health risks.',
              },
              {
                className: cn('bg-[#FFDF74]'),
                title: 'Moderate (51-100)',
                description:
                  'Acceptable air quality, but may be a concern for sensitive individuals.',
              },
              {
                className: cn('bg-[#F89049]'),
                title: 'Unhealthy for Sensitive(101-150)',
                description: 'May cause health effects for sensitive groups.',
              },
              {
                className: cn('bg-[#F75E60]'),
                title: 'Unhealthy (151-200)',
                description: 'May cause health effects for the general public.',
              },
              {
                className: cn('bg-[#9F70B6]'),
                title: 'Very Unhealthy (201-300)',
                description: 'Increased health risks for everyone.',
              },
              {
                className: cn('bg-[#A06A7A]'),
                title: 'Hazardous (301-500)',
                description: "May affect everyone's health.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  'flex flex-col border-white max-md:border-b max-md:pb-4 md:p-2 md:odd:items-end md:odd:border-r lg:p-4 xl:p-6',
                  index < 4 && 'md:border-b',
                )}>
                <div
                  className={cn(
                    'flex items-center gap-2.5 md:gap-5',
                    index % 2 === 0 && 'md:odd:flex-row-reverse',
                  )}>
                  <div
                    className={cn(
                      item.className,
                      'h-2 w-6 rounded-full md:h-4 lg:w-8 xl:w-10',
                    )}></div>
                  <p className={cn(title1, 'font-bold text-white')}>
                    {item.title}
                  </p>
                </div>
                <p
                  className={cn(label1, 'mt-4 font-normal text-white md:mt-6')}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

interface CanUseItem {
  title: string;
  description: string;
  image: StaticImport;
}

interface CanUseCardProps extends React.ComponentProps<'div'> {
  item: CanUseItem;
  isCol?: boolean;
}

const CanUseCard = (props: CanUseCardProps) => {
  const { className, item, isCol = true, ...rest } = props;

  return (
    <div
      className={cn(
        'flex justify-between rounded-xl border border-[#C5C5C5] max-lg:flex-col',
        isCol && 'flex-col',
        className,
      )}
      {...rest}>
      <div className="m-4 lg:m-6 xl:m-8">
        <h5 className={cn(title1, 'font-medium text-white')}>{item.title}</h5>
        <p className={cn(label1, 'mt-2 font-normal text-white')}>
          {item.description}
        </p>
        {/* <p className={cn(label2, 'font-normal text-white')}>Learn More</p> */}
      </div>
      <Image
        className={cn(
          isCol
            ? 'mx-auto h-auto w-1/2 lg:rounded-b-xl'
            : 'my-auto h-4/5 w-auto lg:rounded-e-xl xl:h-full',
          'max-lg:mx-auto max-lg:h-auto max-lg:w-2/3 max-lg:rounded-b-xl',
        )}
        src={item.image}
        alt={`${item.title.toLocaleLowerCase()} image`}
      />
    </div>
  );
};

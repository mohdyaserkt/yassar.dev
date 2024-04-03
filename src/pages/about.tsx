import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Mohammed Yassar, a versatile MERN Stack Developer
        specializing in React.js, Node.js, and MongoDB. With a keen
        eye for detail, I m dedicated to crafting seamless and
        intuitive web applications that prioritize user experience'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Mohammed Yassar</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <CloudinaryImg
                className='float-right ml-6 w-40 md:w-72'
                publicId='portfolio/z7hqj4i9qyb4opsnxnkj'
                width='1500'
                height='1695'
                alt='Photo of me looking really professional and definitely can impress your boss'
                preview={false}
                title=' '
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Mohammed Yassar, a versatile MERN Stack Developer
                  specializing in React.js, Node.js, and MongoDB. With a keen
                  eye for detail, I'm dedicated to crafting seamless and
                  intuitive web applications that prioritize user experience.{' '}
                  {/* <CustomLink href='/blog/youtube-list'>
                    youtube videos
                  </CustomLink>{' '} */}
                  {/* to explore more about web development especially frontend
                  development. */}
                </p>
                <p data-fade='4'>
                  Driven by a passion for innovation, I thrive in dynamic
                  environments where challenges fuel creativity. My approach to
                  development is characterized by a commitment to excellence,
                  collaborative problem-solving, and a relentless pursuit of
                  mastery in my craft.
                </p>
                <p data-fade='5'>
                  Beyond coding, I'm a proactive communicator and team player,
                  valuing collaboration as the cornerstone of successful
                  projects. Excited about the opportunity to contribute my
                  skills to impactful ventures and eager to embark on new
                  challenges in the ever-evolving landscape of web development.
                </p>
              </article>
              {/* <h3 className='h4 mt-4' data-fade='6'>
                What I'm up to?
              </h3>
              <article className='prose mt-2 dark:prose-invert' data-fade='7'>
                <ul>
                  <li>
                    I'm a full-stack engineer at{' '}
                    <CustomLink
                      onClick={() =>
                        trackEvent('Now: Dimension', { type: 'link' })
                      }
                      href='https://dimension.dev?ref=theodorusclarence.com'
                    >
                      Dimension
                    </CustomLink>{' '}
                    while working remotely from Jakarta, Indonesia
                  </li>
                  <li>
                    I'm a technical writer for{' '}
                    <CustomLink
                      onClick={() =>
                        trackEvent('Now: LogRocket', { type: 'link' })
                      }
                      href='https://blog.logrocket.com/author/theodorusclarence/'
                    >
                      LogRocket
                    </CustomLink>
                  </li>
                  <li>
                    I'm a mentor! I do revision-style mentorship (
                    <Tooltip
                      tipChildren={
                        <p className='italic'>
                          *Try translating them to english
                        </p>
                      }
                    >
                      <CustomLink
                        onClick={() =>
                          trackEvent('Now: Mentor Thread', { type: 'link' })
                        }
                        href='https://x.com/th_clarence/status/1713454750090534948?s=20'
                      >
                        thread
                      </CustomLink>
                    </Tooltip>
                    )
                  </li>
                </ul>
              </article> */}

              <h3 className='mt-12' data-fade='8'>
                Tech Stack
              </h3>
              <figure className='mt-2' data-fade='9'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                Feel free to reach out for collaborations or inquiries. I'm
                eager to connect and discuss potential opportunities!
              </p>
            </article>
          </div>
        </section>

        {/* <section id='uses'>
          <div className='layout mt-16'>
            <h2>Uses</h2>
            <CloudinaryImg
              className='mt-8 aspect-video'
              publicId='theodorusclarence/about/setup_2.jpg'
              width='2000'
              height='1500'
              alt='Photo of my desk setup'
            />
            <article className='prose mt-4 dark:prose-invert'>
              <ul>
                <li>MacBook Pro (13" M1 2020, 16GB, 1TB)</li>
                <li>LG UltraFine™ 4K 32 Inch LG (32UN880-B)</li>
                <li>Keychron K2v2</li>
                <li>Logitech M590</li>
                <li>Kindle Paperwhite (10th Generation)</li>
                <li>Stramm Bruno Standing Desk 160x80</li>
                <li>Pexio Jervis Ergonomic Chair</li>
                <li>Press Play Desk Shelf</li>
                <li>Mi Computer Monitor Light Bar</li>
                <li>Creative Pebble V3</li>
              </ul>
            </article>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}

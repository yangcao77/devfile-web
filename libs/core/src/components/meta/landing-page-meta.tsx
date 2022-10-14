/**
 * Copyright 2022 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { PropsWithChildren } from 'react';
import Head from 'next/head';

export interface LandingPageMetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

export function LandingPageMeta(props: PropsWithChildren<LandingPageMetaProps>): JSX.Element {
  const { children, ...rest } = props;

  return (
    <Head {...rest}>
      <link rel="preconnect" href="https://FCRPEMIKYK-dsn.algolia.net" crossOrigin="true" />
      {children}
    </Head>
  );
}

LandingPageMeta.defaultProps = {
  title: 'Devfile',
  keywords: 'Devfile, OpenShift, Kubernetes',
  description: 'Devfile Landing Page',
};

export default LandingPageMeta;
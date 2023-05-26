import { FC, ReactNode } from 'react';
import { ImageProps } from '@rmt/atoms';

export interface DisplayErrorProps {
	children: ReactNode;
}

export interface DisplayErrorTitleProps {
	children: ReactNode;
}

export enum DisplayErrorImageSizeMapper {
	small = 'rmt-display-error__image-container--small',
	medium = 'rmt-display-error__image-container--medium',
	large = 'rmt-display-error__image-container--large',
}

export interface DisplayErrorImageContainerProps {
	children: React.ReactNode;
	size?: keyof typeof DisplayErrorImageSizeMapper;
}

export interface DisplayErrorStructure extends FC<DisplayErrorProps> {
	Title: FC<DisplayErrorTitleProps>;
	ImageContainer: FC<DisplayErrorImageContainerProps>;
	Image: FC<ImageProps>;
}

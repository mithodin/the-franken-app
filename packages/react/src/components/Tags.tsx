import styled from 'styled-components';
import { getAdapter } from '../adapter';

const TagsContainer = styled.div`
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  font-size: 0.8rem;
  padding: 0.1rem 0.6em;
  white-space: nowrap;
  margin-right: 3px;
  margin-bottom: 0.2rem;
  display: inline-block;
  border-radius: 10rem;
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.grayColor};
  color: ${({ theme }) => theme.whiteColor} !important;

  &:hover {
    background-color: ${({ theme }) => theme.extraGrayColor};
  }
`;

interface TagsProps {
    tags: string[];
    onSelectTag: (tag: string) => void;
}

const TagsComponent = ({ tags, onSelectTag }: TagsProps) => {
    return (
        <TagsContainer>
            {tags?.map((tag) => (
                <Tag key={tag} onClick={() => onSelectTag(tag)}>
                    {tag}
                </Tag>
            ))}
        </TagsContainer>
    );
};

export const Tags = getAdapter(TagsComponent)
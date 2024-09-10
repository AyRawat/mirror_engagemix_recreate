export type RegisterRequestDto = {
    email: string;
    name: string;
    password: string;
  };
  
  export type LoginRequestDto = {
    email: string;
    password: string;
  };
  
  export type TokenDto = {
    user: UserDto;
    accessToken: string;
  };
  
  export type UserDto = {
    id: string;
    email: string;
    name: string;
    country?: string;
    phone?: string;
  };
  
  export type UpdateUserProfile = {
    name: string;
    email: string;
    country: string;
    phone: string;
  };
  
  export type Source = "hackernews" | "reddit" | "linkedin" | "twitter" | "quora";
  
  type SemanticScore = {
    openai: number;
    sbert: number;
  };
  
  export type PostSearchQueryDto = {
    keywords: string[];
    searchAllKeywords?: boolean;
    excludes?: string[];
    fromTime?: number;
    sources?: string[];
    sortBy?: "new" | "best";
    limit?: number;
    searchType?: "keyword" | "semantic";
    context?: string;
  };
  
  export type PostSearchOptions = {
    searchType?: "keyword" | "semantic";
    useKeywordsInSemanticSearch?: boolean;
    embeddingType?: "openai" | "sbert";
  };
  
  export type PostResponseDto = {
    source: Source;
    id: string;
    title: string;
    text: string;
    url: string;
    authorName: string;
    authorUrl: string;
    createdAt?: number;
    semanticScore?: SemanticScore;
  };
  
  export type PostStateDto = {
    source: Source;
    id: string;
    title: string;
    text: string;
    url: string;
    authorName: string;
    authorUrl: string;
    createdAt?: Date;
    semanticScore?: SemanticScore;
  };
  
  export type GenerateReplyBodyDto = {
    context: string;
    instruction: string;
    title: string;
    message: string;
  };
  
  export type GenerateReplyResponseDto = {
    reply: string;
  };
  
  
  export type ProjectDto = {
    _id: string;
    companyDomain: string;
    companyDescription: string;
    companyName: string;
    name: string;
    sources: Source[];
    keywords: string[];
    processedAt: number;
    lastPostRemoteId: string;
  };
  
  export type CreateProjectDto = {
    id?: string;
    companyDomain: string;
    companyDescription: string;
    companyName: string;
    name: string;
    sources: Source[];
    keywords: string[];
    processedAt?: number;
    lastPostRemoteId?: string;
  };
  
  export type UpdateProjectDto = Partial<CreateProjectDto>;
  
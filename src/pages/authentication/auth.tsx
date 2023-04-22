import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import Content from "@/components/atoms/Content";
import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { GET_CONTENT_KEYS } from "@/graphql/queries/queries";
import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";

interface IProps {}

const auth: React.FC<IProps> = () => {
  const { language, setLanguage, setContentKeys } =
    useContext(ContentKeyContext);

  const { loading, error, data } = useQuery(GET_CONTENT_KEYS, {
    variables: { page: "auth_page", lang: "pt_BR" },
  });

  useEffect(() => {
    if (data) setContentKeys?.(data.contentKeys);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading the page</p>;

  return (
    <div className='container flex flex-wrap items-center justify-center mx-auto mt-36'>
      <div className='flex flex-wrap flex-col items-center justify-center gap-5 p-10 text-center bg-white rounded-lg shadow-lg border-[1px] border-slate-300'>
        <div className='flex flex-col flex-wrap gap-3'>
          <Content
            className='text-2xl font-bold'
            contentKey='welcome_message'
          />
          <Content contentKey='login_signup_message' />
        </div>
        <div className='flex flex-wrap items-center justify-center'>
          <ButtonGeneric className='mx-5 w-36'>
            <Content contentKey='login_button' />
          </ButtonGeneric>
          <ButtonGeneric className='mx-5 w-36'>
            <Content contentKey='signup_button' />
          </ButtonGeneric>
        </div>
      </div>
    </div>
  );
};

export default auth;


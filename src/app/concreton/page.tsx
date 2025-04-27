"use client"
import Link from 'next/link'
import Search from '../components/Search'
//import { useCategorias } from '../../../lib/swr-hooks'
import Loader from '@/app/components/Loader'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuSuperior from '../components/MenuSuperior'
//import styles from "./page.module.css";
import PromptForm from "../components/PromptForm";
import rehypeHighlight from 'rehype-highlight';
import ReactMarkdown from 'react-markdown';

export default function Tema() {
    const [posts, setPosts] = useState([]);
    const [choices, setChoices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
          const res = await fetch('/api/gets-capitulos')
          const data = await res.json()
          setPosts(data.reverse())
        }
        fetchPosts()
    }, []);

    if (!posts) return <Loader/>

    if(posts.length === 0) {
        return <Loader/>
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full" style={{
            background: 'url(bkg_entrada_cat.jpg) no-repeat center center fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            <MenuSuperior/>
            <Link href={`/`}>
                <Image
                    src='/logo_seoc_entrada.png'
                    width='200'
                    height='200'
                    alt="seoc"
                />
            </Link>
            <p className='font-smooch text-smooch text-sm md:text-2xl text-gray-500 font-bold'><small>Supervisor Especializado en Obras de Concreto</small></p>
            <h2 className='font-smooch text-6xl text-gray-950 mb-2 border-b-2 border-gray-900 pb-3'>ASISTENTE CONCRETÓN SUPERVISOR</h2>
            {choices.map((choice : any) => {
              console.log(choice);
              return (
                <div key={choice.index}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      pre: ({ node, ...props } : {
                        node: any;
                        [key: string]: any;
                      }) => (
                        <pre className={styles.codeBlock} {...props} />
                      ),
                      code: ({ node, inline, ...props } : {
                        node: any;
                        inline: boolean;
                        [key: string]: any;
                      }) => (
                        <code className={inline ? styles.inlineCode : styles.codeContent} {...props} />
                      ),
                    }}
                  >
                    {choice.message.content}
                  </ReactMarkdown>
                </div>
              );
            })}
            <PromptForm
              isLoading={isLoading}
              onSubmit={async (prompt : any) => {
                setIsLoading(true);
                const response = await fetch("/api/chat-gpt", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    prompt,
                  }),
                });

                setIsLoading(false);
                const result = await response.json();
                setChoices(result.choices);
              }}
            />
        </main>
    )
}

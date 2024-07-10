--
-- PostgreSQL database cluster dump
--

-- Started on 2024-07-09 21:36:25

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS;

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-07-09 21:36:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2024-07-09 21:36:25

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-07-09 21:36:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4809 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16433)
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    nome character varying NOT NULL,
    cpf character varying,
    "dataVencimento" timestamp without time zone NOT NULL,
    valor numeric NOT NULL,
    "isPago" boolean DEFAULT false NOT NULL,
    "empresaNome" character varying,
    periodo character varying NOT NULL
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16426)
-- Name: empresa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empresa (
    nome character varying NOT NULL
);


ALTER TABLE public.empresa OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16398)
-- Name: hugo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hugo (
    nome character varying,
    idade integer
);


ALTER TABLE public.hugo OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16418)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16417)
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.migrations_id_seq OWNER TO postgres;

--
-- TOC entry 4810 (class 0 OID 0)
-- Dependencies: 217
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- TOC entry 4647 (class 2604 OID 16421)
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- TOC entry 4803 (class 0 OID 16433)
-- Dependencies: 220
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cliente (nome, cpf, "dataVencimento", valor, "isPago", "empresaNome", periodo) FROM stdin;
Maria Clara 		2024-07-10 00:00:00	240	t	shinohara	Matutino
Gabrielle 		2024-07-10 00:00:00	240	t	shinohara	Vespertino
yasmin 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Lucca 		2024-07-10 00:00:00	240	t	shinohara	Vespertino
Arthur Guilherme		2024-07-10 00:00:00	240	t	shinohara	Vespertino
Yasmin		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
João Guilherme 		2024-07-10 00:00:00	240	f	shinohara	Matutino
Letícia 		2024-07-10 00:00:00	240	f	shinohara	Matutino
Matheus Lemos 		2024-07-10 00:00:00	240	f	shinohara	Matutino
Andressa 		2024-07-10 00:00:00	240	f	shinohara	Matutino
Ícaro 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Laviniah Toledo		2024-07-10 00:00:00	240	f	shinohara	Matutino
Rebeca Pires 		2024-07-10 00:00:00	240	f	shinohara	Matutino
Maria Eduarda Palmier de Lucena		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Thiago Honorato		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Emanuella		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
davi Lucca		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Mikael 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Isaque 		2024-07-15 00:00:00	240	f	shinohara	Vespertino
Daniele 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Vitória Oliveira		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Amanda 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Sofia / Irmã Davi 		2024-07-20 00:00:00	240	f	shinohara	Vespertino
Emanuel Silva / Pró Lote 		2024-07-10 00:00:00	220	f	shinohara	Vespertino
Luana		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
 Ana Abel		2024-07-20 00:00:00	300	f	Colégio Militar Luziânia	Matutino
Érika 		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
Mateus 		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
 Pedro Henrique		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
 Paola		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
Maria Victória		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
arthur Thiago Lopes 		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Irlane		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Kauãn 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Davi Silva		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
miguel		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Sabrina Nunes		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
camylli 		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Nicolas		2024-07-30 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Rafael		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Evellyn		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Nikolle Medeiros 		2024-07-20 00:00:00	240	f	shinohara	Matutino
Júlia Ferreira 		2024-07-20 00:00:00	240	f	shinohara	Matutino
yasmin Gabrielle		2024-07-10 00:00:00	240	f	Colégio Militar Luziânia	Matutino
David Sena		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Emanuel Santos 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Samuel Vinícius		2024-07-20 00:00:00	240	f	shinohara	Vespertino
Manuela Vitória 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
David Luiz 		2024-07-25 00:00:00	240	f	shinohara	Vespertino
Ana Julia Borges		2024-07-23 00:00:00	240	f	shinohara	Vespertino
Sofia Negreiro 		2024-07-28 00:00:00	240	f	shinohara	Vespertino
Isabelle Cristine Evangelista		2024-07-10 00:00:00	240	f	shinohara	Vespertino
João Victor 		2024-07-30 00:00:00	240	f	shinohara	Vespertino
sara Isabelly		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
 Maykon Douglas		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
Keven da Silva		2024-07-10 00:00:00	300	t	Colégio Militar Luziânia	Vespertino
Larissa		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Vitor Amorim		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Beatriz Chaves 		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Lucas Alexandre		2024-07-30 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Erick 		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Maria Eduarda Alvez 		2024-07-10 00:00:00	300	t	Colégio Militar Luziânia	Vespertino
Lívia Lopes		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Lara Evelyn 		2024-07-10 00:00:00	240	f	shinohara	Matutino
Gabriella de Jesus		2024-07-10 00:00:00	240	f	shinohara	Matutino
Luana Pereira Da Silva		2024-07-15 00:00:00	240	f	shinohara	Matutino
Arthur Oliveira 		2024-07-10 00:00:00	240	f	shinohara	Matutino
Lara Vitória 		2024-07-25 00:00:00	240	f	shinohara	Vespertino
Thiago Silva 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
Sabryna 		2024-07-20 00:00:00	240	f	shinohara	Vespertino
Ana Julia Rodrigues 		2024-07-28 00:00:00	240	f	shinohara	Vespertino
Wadna 		2024-07-30 00:00:00	240	f	shinohara	Vespertino
Cecília 		2024-07-15 00:00:00	240	f	shinohara	Vespertino
Maria Eduarda Lopes		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Isabella / Pró Lote 		2024-07-30 00:00:00	240	f	shinohara	Vespertino
Alice / Pró Lote 		2024-07-10 00:00:00	240	f	shinohara	Vespertino
 Pedro Leal		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
Victor Modesto		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
Fernanda		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
Arthur		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
 Natalia		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
sara vitória		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
eloa		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Diego 		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Nicole / Ming 1 		2024-07-10 00:00:00	240	t	shinohara	Vespertino
Ana Luísa / J. Lucas 		2024-07-10 00:00:00	240	t	shinohara	Vespertino
Maria Eduarda / J. Lucas 		2024-07-10 00:00:00	240	t	shinohara	Vespertino
Maria Eduarda R09		2024-07-10 00:00:00	300	t	Colégio Militar Luziânia	Vespertino
 Débora		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
sofia 		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Vespertino
Ana Cardoso		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
 Filipe Cardoso		2024-07-10 00:00:00	300	f	Colégio Militar Luziânia	Matutino
Kevin William 		2024-07-10 00:00:00	240	f	shinohara	Matutino
\.


--
-- TOC entry 4802 (class 0 OID 16426)
-- Dependencies: 219
-- Data for Name: empresa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empresa (nome) FROM stdin;
shinohara
Colégio Militar Luziânia
\.


--
-- TOC entry 4799 (class 0 OID 16398)
-- Dependencies: 216
-- Data for Name: hugo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hugo (nome, idade) FROM stdin;
hugo othavio	15
\.


--
-- TOC entry 4801 (class 0 OID 16418)
-- Dependencies: 218
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
1	1707613236924	Infra1707613236924
2	1707619767670	Migrations1707619767670
\.


--
-- TOC entry 4811 (class 0 OID 0)
-- Dependencies: 217
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 2, true);


--
-- TOC entry 4650 (class 2606 OID 16425)
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- TOC entry 4654 (class 2606 OID 16440)
-- Name: cliente cliente_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pk PRIMARY KEY (nome);


--
-- TOC entry 4652 (class 2606 OID 16432)
-- Name: empresa empresa_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pk PRIMARY KEY (nome);


--
-- TOC entry 4655 (class 2606 OID 16441)
-- Name: cliente FK_2a90f54c5259780814e7de04831; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT "FK_2a90f54c5259780814e7de04831" FOREIGN KEY ("empresaNome") REFERENCES public.empresa(nome);


-- Completed on 2024-07-09 21:36:25

--
-- PostgreSQL database dump complete
--

-- Completed on 2024-07-09 21:36:25

--
-- PostgreSQL database cluster dump complete
--

